import Title from '../Title';
import AddButton from '../AddButton';
import './styles.css';
import Task from '../Task';

export default function Container() {
  return (
    <div id="container">
      <div id="content">
        <Title />
        <AddButton />
        <Task />
      </div>
    </div>
  );
}
