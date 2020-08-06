import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
<article className="teacher-item">
<header>
    <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_cZnNfMC7fBVbnw0Y-b9nhZJSSLAEVgfVssBT2=s83-c-mo" alt="Luan Moraes"/>
    <div>
        <strong>Luan Moraes</strong>
        <span>Engenheiro de Computação</span>
    </div>
</header>

<p>
    Lsadsadsadasdasddasdorem ipsum dolor sit amet consectetur adipisicing elit. In eius, aut rerum voluptatum ducimus inventore tempora nobis iste minus doloribus delectus est aliquid, beatae natus rem aliquam iusto blanditiis dolorem!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe qui, veniam est perspiciatis quo. Optio inventore, iste nemo modi fugiat voluptatem dolore reiciendis fugit magnam eos iusto illo placeat?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim velit dolore consectetur, tempore possimus, cum ullam provident sapiente officia eum perferendis nesciunt aliquam cumque. Vero esse hic porro. Saepe.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptate atque est suscipit quos cum deleniti excepturi consequuntur ratione? Ipsum fugit eveniet quasi non perspiciatis blanditiis dignissimos ea delectus fuga!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit sint earum cupiditate. Quod consequatur fugit a officiis aut esse ex enim cumque vel! Minus fugiat aliquam iste dolorum in.
</p>

<footer>
    <p>
        Preço/hora
        <strong>R$1000,00</strong>
    </p>
    <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
    </button>
</footer>

</article>
    )
}

export default TeacherItem;