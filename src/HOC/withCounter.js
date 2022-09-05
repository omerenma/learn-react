import React from 'rect'

// Implement Higher Order Component
const HigherOrderComponent = (Component) => {
    class NewComponent extends React.Component {
        render (){
            return <Component />
        }
    }
    return HigherOrderComponent

}