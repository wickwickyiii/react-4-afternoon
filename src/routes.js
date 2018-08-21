import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/2" component={About} />
        <Route path="/classList/:class" component={ClassList} />
        <Route path="/student/:id" component={Student} />
    </Switch>
)


