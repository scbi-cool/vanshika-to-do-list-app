import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './Todo';
import NoPage from './NoPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList'

function App() {
 return (
   <>
     <LearningList />
     <BrowserRouter>
       <Routes>
           <Route index element={<HomeContent />} />
           <Route path="todo" element={<Todo />} />
           {/* <Route path="excercise1" element={<Excercise1 />} /> */}
           <Route path="*" element={<NoPage />} />
       </Routes>
     </BrowserRouter>
   </>
 );
}


function HomeContent() {
 return (
   <div> Please click one of the excercise links to see them in action </div>
   );
}


function LearningList() {
 return (
   <>
     <a href = "/">Home</a>
     <a href="todo">Lession1</a>
     <hr />
   </>
 )
}


export default App;

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
