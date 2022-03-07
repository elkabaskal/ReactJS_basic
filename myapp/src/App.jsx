
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from "./routes/Home";
import { Projects } from "./routes/Projects";
import { Tasks } from "./routes/Tasks";
import { Task } from "./routes/Task";
import { Header } from "./components/Header";
import { getChildrenAndRenderPropsLink, getHomeLink, getProjectsLink, getTaskLink, getTasksLink } from "./navigation";
import { ChildrenAndRenderProps } from "./routes/Profile";
//import { store } from './store';


function App() {

    return (
        <div><Header />

            <Switch>
                <Route exact path={getHomeLink()}
                    component={Home} />
                <Route exact path={getChildrenAndRenderPropsLink()}
                    component={ChildrenAndRenderProps} />
                <Route path={getProjectsLink()}>
                    <Projects>
                        <Switch>
                            <Route path={getTaskLink()}
                                component={Task} />
                            <Route path={getTasksLink()}
                                component={Tasks} />
                        </Switch>
                    </Projects>
                </Route>
            </Switch>

        </div>
    );
}

export default App;