import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
export default function Home() {
  return (
    <div className={styles.page}>
      <h1>SITE CRIADO PARA DISCIPLINA PROGRAMAÇAO FRONT-END</h1>
       
       <main>
        
       <Profile />

       </main>
      
    </div>
  );
}
