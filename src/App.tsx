import React from 'react';
import {Route} from 'react-router';
import Layout from './components/Screen';
import {Board} from "./components/Board";

export default function App() {

    return <>
        <Layout>
            <Route key="Board" path='/' element={<Board/>}/>
        </Layout>
    </>
}

App.displayName = App.name
