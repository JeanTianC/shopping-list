import { useLayoutEffect, useState } from "react";

const initialList = [
  {text:"apple",
   isDone:false,
  },
  {text:"orange",
  isDone:false,
 },
 {text:"banana",
 isDone:false,
}
]


function App() {
const [shoppingList,setShoppingList] =useState(initialList)

function handleAdd(addItem){
  setShoppingList(shoppingList=>[...shoppingList,addItem])
}

  return (
    <div className="app">
      <AddShoppingListForm onAddList={handleAdd}/>
      <ShoppingList shoppingList={shoppingList}/>
    </div>
  );
}

function AddShoppingListForm({onAddList}){
 const [newItem,setNewItem] = useState("")

function handleAddShoppingList(e){
  e.preventDefault()

  if(!newItem) return 
  const addItem = {
    text:newItem,
    isDone:false,
  }

  onAddList(addItem)

  setNewItem("")
}

  return <form onSubmit={handleAddShoppingList} className="add-form">
    <label>Add your list</label>
    <input 
    type="text"
    value={newItem} 
    onChange={(e)=>setNewItem(e.target.value)}
    />
    <button>ADD</button>
  </form>
}

function ShoppingList({shoppingList}){
  return <ul className="shopping-list">
     {
    shoppingList.map((item,index)=>(<ShoppingItem shoppingItem={item} key={index}  />))
  }
  </ul>
}

function ShoppingItem({shoppingItem}){
  const [isChecked,setIsChecked] = useState(false)


  return  (
    <li 
    className={isChecked ? "shopping-item checked" :"shopping-item"}
    >
      <input 
      type="checkbox"
      onChange={e=>setIsChecked(e.target.checked)}
      />
      <span>{shoppingItem.text}</span>
    </li>
  )
  
}


export default App;
