import 'lib-flexible';
import ReactDOM from 'react-dom/client';

import 'reset-css';
import MoodsRecorder from './view/MoodsRecorder.js'


const rootNode = ReactDOM.createRoot(document.getElementById('root'));

rootNode.render(
    <MoodsRecorder/>,
)
