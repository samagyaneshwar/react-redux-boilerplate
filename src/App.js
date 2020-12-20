import { useState } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { setTitle } from './store/actions/simpleAction';

function App(props) {

  const [title, setTitle] = useState('');

  return (
    <div className="wrapper">
      <h1 className="title">{props.title}</h1>
      <input className="title_input" type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={() => props.setTitle(title)}>Set Title</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.simple.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTitle: (title) => dispatch(setTitle(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
