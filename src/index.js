import React from 'react';
import {render} from 'react-dom';

import Routers from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import Test from './Test'
import './post.css'
import 'highlight.js/styles/github.css'
render(<Routers />,document.getElementById('root'));
