import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { firestore } from "../lib/firebase";

export const addUser = async (authUser: any) => {
  const userRef = doc(collection(firestore, "users"), authUser.uid);
  const resp = await setDoc(userRef, { ...authUser }, { merge: true });
  return resp;
};

export const addQuiz = async (quizData: any) => {
  const docRef = await addDoc(collection(firestore, "quiz"), quizData);
  return docRef;
};

export const getAllQuiz = async () => {
  const querySnapshot = await getDocs(collection(firestore, "quiz"));
  const quiz = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return quiz;
};

export const getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(firestore, "users"));
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return users;
};

export const getSingleQuiz = async (quizId) => {
  const snapshot = await getDoc(
    doc(collection(firestore, "quiz"), String(quizId))
  );
  if (snapshot.exists()) {
    return snapshot.data();
  } else {
    return null;
  }
};

export const addAnswer = async (data) => {
  const docRef = await addDoc(collection(firestore, "answer"), data);
  return docRef;
};

export const getAnswer = async (answerId) => {
  const snapshot = await getDoc(
    doc(collection(firestore, "answer"), String(answerId))
  );
  if (snapshot.exists()) {
    return JSON.stringify(snapshot.data());
  } else {
    return null;
  }
};
