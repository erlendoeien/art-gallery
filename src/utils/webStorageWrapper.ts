/* eslint-disable  @typescript-eslint/no-explicit-any */

const PROJECT_STORAGE_KEY = 'artGallery';

const getItem = (storage: Storage, key?: string) => {
    const retrievedObjectString = storage.getItem(PROJECT_STORAGE_KEY);
    if (retrievedObjectString) {
        let retrievedObject = JSON.parse(retrievedObjectString);
        if (key !== undefined) {
            retrievedObject = retrievedObject[key];
        }
        return retrievedObject;
    }
    return null;
};

const setItem = (storage: Storage, key: string, obj: any) => {
    // Get already stored items
    const new_object = getItem(storage) || {};
    // Add new item
    new_object[key] = obj;
    // Save
    storage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(new_object));
};

const genericStorage = (storage: Storage) => {
    return {
        getItem: (key?: string) => {
            if (key !== undefined) {
                return getItem(storage, key);
            }
            return getItem(storage);
        },
        setItem: (key: string, obj: any) => {
            return setItem(storage, key, obj);
        }
    };
};

export const LocalStorage = genericStorage(localStorage);
export const SessionStorage = genericStorage(sessionStorage);
