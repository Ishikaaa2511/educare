// import Message from './Message';
// import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
// import { useEffect, useState } from 'react';
// import { db } from '../../firebase.config';
// const ChatBox = () => {
  
//   const [messages, setMassages] = useState([]);


//   useEffect(() => {
//     const q = query(
//       collection(db, "messages"),
//       orderBy("createdAt"),
//       limit(50),
//     );
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messages = [];
//       querySnapshot.forEach((doc) => {
//         messages.push({ ...doc.data(), id: doc.id });
//       });
//       setMassages(messages);
//     });

//   return () => unsubscribe;
//   }, []);


//   return (
//     <div className="pb-44 pt-20 containerWrap">
//     {messages.map(message => (
//       <Message key={message.id} message={message} />
//     ))}
  
//   </div>
//   )
// }

// export default ChatBox
