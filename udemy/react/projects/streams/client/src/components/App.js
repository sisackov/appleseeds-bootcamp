import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return <Link to='/pagetwo'>Navigate to PageTwo</Link>;
};

const PageTwo = () => {
    return <Link to='/'>Navigate to PageOne</Link>;
};

/**
 ** 'history'     -> keeps track of the address bar in the browser. See: https://developer.mozilla.org/en-US/docs/Web/API/History
 ** BrowserRouter -> listens to 'history' for changes to the URL. Uses everything after the
 **                  Top-level Domain(.com, .org) or port as path
 ** Route         -> visible only when the path matches the current URL
 ** exact prop    -> the path prop is checked with the contains method(instead of a full match)
 **                  and therefor sometimes multiple matches are returned. exact prop changes
 **                  the check to be an exact match i.e show this Route iff path === {path prop}
 ** a href tag    -> using this to navigate is a terrible practice since during the loading of an href
 **                  the browser will dump the old html file(which in the case of routing is also the current html file)
 **                  including the React/Redux data associated with it
 ** Link          -> uses a href under the hood however when clicking on a Link React Router prevents the
 **                  browser from navigating to the new page. URL still changes which is updated in
 **                  in 'history' which in turn caught by BrowserRouter etc...
 ** HashRouter    -> uses everything after a # as the path which is inserted automatically to the path.
 **                  It uses URL hash, it puts no limitations on supported browsers or web server.
 **                  Server-side routing is independent from client-side routing.
 **                  Usage example is github pages.
 ** MemoryRouter  -> Doesn't use the browser's history(the URL) to track navigation. Useful for testing.
 */
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={PageOne} />
                <Route path='/pagetwo' component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};

export default App;
