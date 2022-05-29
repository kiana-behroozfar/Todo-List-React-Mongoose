const router = require('express').Router()
const todoItemsModel = require ('../models/todoItems')

router.post('/api/item', async (req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item : req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
    }catch(err){
        res.json(err)
    }
})

// create
router.get("/api/item", async (req,res) => {
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err)
    }
});

//update with id
router.put("/api/item:id", async (req, res) => {
  try {
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id,{$set:req.body});
 res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

//delete
router.delete("/api/item:id", async (req, res) => {
  try {
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteItem);
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;