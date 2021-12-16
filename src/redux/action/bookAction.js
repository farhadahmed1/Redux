// add to reading list
export function addToReadingList(payload) {
    return {
        type: 'ADD_TO_READING_LIST',
        payload
    }
}

// remove to reading list
export function removeFormReadingList(payload) {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload
    }
}

// finished reading
export function addToFinishedList(payload) {
    return {
        type: 'ADD_TO_FINISHED_LIST',
        payload
    }
}

