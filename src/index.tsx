import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

import Main from './components/Main/Main';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import './index.scss';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:3000/graphql'
    }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Main />
    </ApolloProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
