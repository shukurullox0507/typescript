import './App.css';
import { Text } from './components/polymorphic/Text';

function App() {
  return (
    <div className="App">
      <Text size='lg'>Heading</Text>
      <Text size='md'>Heading</Text>
      <Text size='sm' color='secondary'>Heading</Text>
    </div>
  );
}

export default App;
