import {TodoList} from './components/TodoList';
const date1 = new Date(2023, 1, 26, 11, 30);
const date2 = new Date(2023, 2, 14, 5, 20);

const todoListData = [
  {
    title: 'Начать читать кингу',
    desc: 'Стремление',
    image: '',
    done: true,
    createdAt: date1,
    Key: date1.getTime(),
  },
  {
    title: 'Не бросать читать книгу',
    desc: 'Сила воли',
    image: '',
    done: false,
    createdAt: date2,
    Key: date2.getTime(),
  },
];

const App = () => {
  const setDone = (id) => {
    console.log('test-id:', id);
  };
  return (
    <>
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <div className="navbar-item is-uppercase">Kachanov.dev</div>
        </div>
      </nav>

      <main className="content px-6 mt-6">
        <TodoList todoListData={todoListData} setDone={setDone} />
      </main>
    </>
  );
};

export {App};
