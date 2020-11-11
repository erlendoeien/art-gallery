// eslint-disable-next-line
import React, { FC, ReactNode, PropsWithChildren, useState, useEffect, useContext } from 'react';
import { LocalStorage } from '../utils/webStorageWrapper';

type Mood = 'happy' | 'moody';

interface IMoodContext {
    mood: Mood;
    handleChangeMood: () => void;
    isMoody: boolean;
}

/**
 * Set default value to be either stored value or happy
 */
export const MoodContext = React.createContext<IMoodContext>({
    mood: 'moody',
    handleChangeMood: () => {},
    isMoody: true
});

export class MoodProvider extends React.Component<
    PropsWithChildren<ReactNode>,
    { isMoody: boolean }
> {
    constructor(props: PropsWithChildren<ReactNode>) {
        super(props);
        this.state = {
            isMoody: true
        };
    }

    /**
     * Checks the storage if mood is already set,
     * then conditionally updates state
     */
    componentDidMount(): void {
        const { isMoody } = this.state;
        const storedIsMoody = LocalStorage.getItem('isMoody');

        if (storedIsMoody !== null && storedIsMoody !== `${isMoody}`) {
            this.setState({ isMoody: !isMoody });
        }
    }

    /**
     * Update localstorage of mood when it changes, could be done in handleChangeMood as well
     * But this ensures the logging/storage on actual change
     */
    componentDidUpdate(_: PropsWithChildren<ReactNode>, prevState: { isMoody: boolean }): void {
        const { isMoody } = this.state;
        if (prevState.isMoody !== isMoody) {
            LocalStorage.setItem('isMoody', isMoody);
        }
    }

    handleChangeMood = (): void => {
        this.setState(({ isMoody }) => ({ isMoody: !isMoody }));
    };

    render(): JSX.Element {
        const { isMoody } = this.state;
        const { children } = this.props;
        return (
            <MoodContext.Provider
                value={{
                    isMoody,
                    mood: isMoody ? 'moody' : 'happy',
                    handleChangeMood: this.handleChangeMood
                }}
            >
                {children}
            </MoodContext.Provider>
        );
    }
}

MoodProvider.contextType = MoodContext;
