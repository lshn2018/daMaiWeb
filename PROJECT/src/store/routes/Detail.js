import React from 'react';
import {connect} from 'react-redux'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            Detail
        </div>
    }
}

export default connect()(Detail);