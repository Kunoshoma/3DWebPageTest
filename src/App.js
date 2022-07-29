import './App.css';
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense,useRef,useState } from "react";
import Roji from "./roji"

function TRoji({props}) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = Math.sin(t/4)/2
  });

  return (
    <mesh ref={ref}>
      <Roji
        ref={ref}
        scale={0.3}
        rotation={[0, -1.5, -0.2]}
        position={[0, -0.5, 0]}
      />
      ;
    </mesh>
  );
}

function HeaderA(){
  return (
    <header>
      <h1 className="title">Portfolio</h1>
      <ul className="topbar">
        <li className="toplink">
          <a href="https://master--creative-licorice-00b228.netlify.app/">
            PokeDisco
          </a>
        </li>
        <li className="toplink">Pixiv</li>
        <li className="toplink">Contact</li>
      </ul>
    </header>
  );
}

function SidebarRight(){
  return (
    <div className="sideR">
      <h1 className='sideTitle'>What I need <br/>to create this page</h1>
      <ul className="sideMain">
        <li className='langs'>Node.js</li>
        <li className='langs'>React</li>
        <li className='langs'>Three.js</li>
        <li className='langs'>React-three/fiber</li>
        <li className='langs'>Blender</li>
        <li className='langs'>Textures.com</li>
      </ul>
    </div>
  );
}

function SidebarLeft(){
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="sideL">
      <div className="humbutton" onClick={() => menuFunction()}>🍔</div>
      <div className={openMenu ? "opened" : "closed"}>
        <h1>ハンバーガーメニュー</h1>
        <ul className="hambgs">
          <li>
            <a href="https://www.mcdonalds.co.jp/menu/">チーズバーガー</a>
          </li>
          <li>
            <a href="https://www.mcdonalds.co.jp/menu/">テリヤキバーガー</a>
          </li>
          <li>
            <a href="https://www.mcdonalds.co.jp/menu/">倍ビッグマッグ</a>
          </li>
          <li>
            <a href="https://www.mcdonalds.co.jp/menu/">チキンクリスプ</a>
          </li>
          <li>
            <a href="https://www.mcdonalds.co.jp/menu/">フライドポテト</a>
          </li>
        </ul>
        <p id='discription'>※useStateで簡易実装</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="canvas-container">
      <HeaderA />
      <SidebarRight />
      <Canvas>
        <Suspense fallback={null}>
          <TRoji />
          <ambientLight intensity={0.3} />
          <spotLight intensity={1} position={[0, 1, 1]} penumbra={1} />
        </Suspense>
      </Canvas>
      <SidebarLeft />
    </div>
  );
}

export default App;
