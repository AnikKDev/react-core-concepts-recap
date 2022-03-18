import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import Mobile from './components/Mobile';
import Todo from './components/Todo';

function App() {
  const style = {
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
    border: '3px solid black',
    borderRadius: '20px',
    padding: '10px 20px',
    textAlign: 'center',
    width: '50%',
    margin: '0 auto'
  }
  return (
    <div className="App">
      <h2>Article</h2>
      <article className='blog'>
        <h2 style={style}>This is an article</h2>
        <p style={{ fontStyle: 'italic', fontSize: '1.15em', lineHeight: '30px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error illum quidem quam ipsum delectus dolores, ipsa officia, iste quas sint ratione nesciunt, dolorum amet facere fugit ducimus fugiat nobis doloremque ipsam numquam consequatur labore! Numquam, accusantium dolore itaque maxime rerum quaerat commodi quae, accusamus ullam, sapiente nesciunt eligendi eveniet alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officiis non soluta maiores in corrupti blanditiis laboriosam perspiciatis cupiditate aspernatur voluptatem totam dolore molestiae sed odit amet illo praesentium, nam exercitationem doloribus cumque voluptas quod cum. Nesciunt officiis nam magnam id, provident nemo voluptatibus aliquid. Illum, magni inventore? Pariatur nesciunt maiores possimus iure dignissimos hic officia blanditiis recusandae! Suscipit neque doloremque architecto omnis, voluptatibus dolore et dicta optio natus harum maxime iste saepe voluptatum incidunt officiis odit vel error consequatur quasi! Laudantium, voluptatibus consequatur. Neque repudiandae perferendis vitae tempora rem eveniet, voluptatem dolor, ad a natus eum, ab obcaecati quia!</p>
      </article>


      <Blog heading='This is Heading' author="This is Author's signature"></Blog>
      <Blog heading='This is Heading' author="This is Author's signature"></Blog>
      <Blog heading='This is Heading' author="This is Author's signature"></Blog>



      <Mobile></Mobile>

      <Todo></Todo>

    </div>
  );
}

export default App;
