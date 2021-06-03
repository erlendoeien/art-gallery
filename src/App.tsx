// eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GalleryController from './components/Gallery/GalleryController';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import './App.css';
import { useAppSelector } from './app/hooks';

const App: React.FC = () => {
    const { fontColor, backgroundColor } = useAppSelector((state) => state.theme);
    return (
        <Router>
            <div className="app" style={{ backgroundColor, color: fontColor }}>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/Utstilling">
                        <GalleryController displayFavorites={false} />
                    </Route>
                    <Route path="/favoritter">
                        <GalleryController displayFavorites />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
