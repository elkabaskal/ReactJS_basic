export const getHomeLink = () => '/';

export const getProjectsLink = () => ['', 'chats'].join('/');

export const getTasksLink = (projectId = ':projectId') => [
    getProjectsLink(),
    projectId
].join('/');

export const getTaskLink = (projectId = ':projectId', taskId = ':taskId') => [
    getTasksLink(projectId),
    taskId
].join('/');

export const getChildrenAndRenderPropsLink = () => [
    '', 'profile'
].join('/')