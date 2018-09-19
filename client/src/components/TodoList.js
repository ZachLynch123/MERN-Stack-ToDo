import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
// gets state from state from redux to react component
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class TodoList extends Component {
    
    // React lifecycle method ran when the component mounts
    // ran whenever you make api request or calling action
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name}]
                            }));
                        }
                    }}
                >Add item</Button>

                <ListGroup>
                    <TransitionGroup className="todo-list">
                    {items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={700} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !==id),
                                            
                                        }));
                                    }}
                                >&times;</Button>
                                {name} 
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

TodoList.propTypes = {
    // 2 props in this component, getItems(action) 
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    // using 'item' because thats the name given to the reducder
    // in root reducer  
    item: state.item
}) 


// takes in a function and any actions, in this case it's just getItems
export default connect(mapStateToProps, { getItems })(TodoList);