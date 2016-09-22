import React from 'react';
import {render} from 'react-dom';

import Routers from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import Test from './Test';
import 'highlight.js/styles/github.css';
import './post.css';
render(<Routers />,document.getElementById('root'));
