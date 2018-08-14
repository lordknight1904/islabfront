import api from '../../api/index';

export const ACTIONS = {
    FETCH_TITLE: 'FETCH_TITLE',
    SET_HELMET: 'SET_HELMET',
    FETCH_JOURNAL: 'FETCH_JOURNAL',
    FETCH_CONFERENCE: 'FETCH_CONFERENCE',
    FETCH_MEMBER: 'FETCH_MEMBER',
    FETCH_ALUMNI: 'FETCH_ALUMNI',
    FETCH_COURSE: 'FETCH_COURSE',
    SET_PUBLICATION_CURRENT_PAGE: 'SET_PUBLICATION_CURRENT_PAGE',
};

const initialState = {
    appName: 'Islab',
    title: 'Home',
    description: 'description',
    member: [],
    alumni: [],
    course: [],

    publicationLoading: false,
    publicationCurrentPage: 0,
    journal: [],
    conference: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_PUBLICATION_CURRENT_PAGE:
            return {
                ...state,
                publicationCurrentPage: action.page,
            };
        case ACTIONS.FETCH_JOURNAL:
            return {
                ...state,
                journal: action.papers,
            };
        case ACTIONS.FETCH_CONFERENCE:
            return {
                ...state,
                conference: action.papers,
            };
        case ACTIONS.FETCH_MEMBER:
            return {
                ...state,
                member: action.people,
            };
        case ACTIONS.FETCH_ALUMNI:
            return {
                ...state,
                alumni: action.people,
            };
        case ACTIONS.FETCH_COURSE:
            return {
                ...state,
                course: action.course,
            };
        case ACTIONS.FETCH_TITLE:
            return {
                ...state,
                title: action.title,
            };
        case ACTIONS.SET_HELMET:
            return {
                ...state,
                title: action.title,
                description: action.description,
            };
        default:
            return {...state};
    }
};

export const setHelmet = (title, description) => ({
    type: ACTIONS.SET_HELMET,
    title,
    description,
});
export const setPublicationCurrentPage = (page) => ({
    type: ACTIONS.SET_PUBLICATION_CURRENT_PAGE,
    page
});
export const setTitle = () => ({
    type: ACTIONS.FETCH_TITLE,
});
export const fetchTitle = () => (dispatch, getState, api) => {
};

export const addJournal = (papers) => ({
    type: ACTIONS.FETCH_JOURNAL,
    papers
});
export const addConference = (papers) => ({
    type: ACTIONS.FETCH_CONFERENCE,
    papers
});
export const addMember = (people) => ({
    type: ACTIONS.FETCH_MEMBER,
    people
});
export const addAlumni = (people) => ({
    type: ACTIONS.FETCH_ALUMNI,
    people
});
export const addCourse = (course) => ({
    type: ACTIONS.FETCH_COURSE,
    course
});
export const fetchCourseByAlias = (alias) => (dispatch) => {
    return api.callApi(`course/${alias}`, 'get').then(res => {
        return res.data;
    })
};
export const fetchSubject = () => (dispatch) => {
    api.callApi('course', 'get').then(res => {
        dispatch(addCourse(res.data));
    })
};
export const fetchJournal = () => (dispatch) => {
    api.callApi('paper/type/Journal', 'get').then(res => {
        dispatch(addJournal(res.data));
    })
};
export const fetchConference = () => (dispatch) => {
    api.callApi('paper/type/Conference', 'get').then(res => {
        dispatch(addConference(res.data));
    })
};
export const fetchMember = () => (dispatch) => {
    api.callApi('person/graduated/0', 'get').then(res => {
        dispatch(addMember(res.data));
    })
};
export const fetchGraduated = () => (dispatch) => {
    api.callApi('person/graduated/1', 'get').then(res => {
        dispatch(addAlumni(res.data));
    })
};
