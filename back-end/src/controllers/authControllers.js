import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

const singup = async (req,res) => {
   try {
       const {name,email,password} = req.body;
       const user = await User.findOne({email});
       if (user) {
           return res.status(400).json({message: "User already exists" , success: false  });
       }
       const newUser = new User({name,email,password});
    
     newUser.password = await bcrypt.hash(password, 10);
     
       await newUser.save();
     res.status(201).json({message: "User created successfully", success: true})
   } catch (error) {
       res.status(500).json({message: error.message , success: false });
   }
};

const login = async (req,res) => {
  try {
      const {email,password} = req.body;
      const user = await User.findOne({email});
      if (!user) {
          return res.status(400).json({message: "User does not exist" , success: false  });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({message: "Invalid credentials" , success: false  });
      }
    res.status(200).json({message: "User logged in successfully",success: true, user:{
      name : user.name,
      email : user.email,
    }  })
  } catch (error) {
      res.status(500).json({message: error.message , success: false });
  }
  
}

export {singup,login}
