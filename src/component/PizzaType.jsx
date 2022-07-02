import React from 'react'

function PizzaType({title}) {
  return (
    <>
  

    <h2 class="text-center yaw">{title} Types</h2>
<div class="container">

<div className='row  smallrow'>
<div className="ton">
<img src="Pic/11.jpg" class="img-responsive haw" alt=""/>
    <h2>1. Neapolitan Pizza</h2>
    <h4>Neapolitan is the original pizza. This delicious pie dates all the way back to 18th century in Naples, Italy. During this time, the poorer citizens of this seaside city frequently purchased food that was cheap and could be eaten quickly. Luckily for them, Neapolitan pizza was affordable and readily available through numerous street vendors.</h4>
</div>
   </div>

   <div className='row smallrow'>
   <div className="ton"><img src="Pic/10.jpg" class="img-responsive haw" alt=""/>
   <h2>2. Greek Pizza</h2>
    <h4>Greek pizza was created by Greek immigrants who came to America and were introduced to Italian pizza. Greek-style pizza, especially popular in the New England states, features a thick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom. While this style has a crust that is puffier and chewier than thin crust pizzas, it’s not quite as thick as a deep-dish or Sicilian crust.</h4>
</div>
</div>

<div className='row smallrow'>
<div className="ton"><img src="Pic/7.jpg" class="img-responsive haw" alt=""/>
    <h2>3. New York-Style Pizza</h2>
<h4>With its characteristic large, foldable slices and crispy outer crust, New York-style pizza is one of America’s most famous regional pizza types. Originally a variation of Neapolitan-style pizza, the New York slice has taken on a fame all its own, with some saying its unique flavor has to do with the minerals present in New York’s tap water supply.</h4>
</div>
</div>

<div className='row'>
<div className="ton"><img src="Pic/9.jpg" class="img-responsive haw" alt=""/>
<h2>4. Detroit Pizza</h2>
<h4>Reflecting the city’s deep ties to the auto industry, Detroit-style pizza was originally baked in a square automotive parts pan in the 1940’s. Detroit pizza is first topped with pepperoni, followed by brick cheese which is spread to the very edges of the pan, yielding a caramelized cheese perimeter. Sauce is then spooned over the pizza, an order similar to Chicago-style pizza. This pizza features a thick, extra.</h4>
</div>
</div>





</div>
    </>
  )
}

export default PizzaType