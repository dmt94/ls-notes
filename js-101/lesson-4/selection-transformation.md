### Selection and Transformation ###

<style>
  .selection {
    color: cyan;
  }

  .transform {
    color: orange;
  }
</style>


Besides iteration, the two most common actions to perform on a collection are **selection** and **transformation**.


<h3 class="selection">Selection</h3>
<p class="selection">
is <b><u>picking</u></b> some elements out of a collection depending on one or more criteria. For example, you might want to pick out all the odd numbers from an array. 
</p>

<h3 class="transform">Transformation</h3>
<p class="transform">
refers to manipulating every element in the collection. For example, increment all elements of an array by 1.</p>

If there are `N` elements in a collection, **selection** results in `N or fewer elements`, while **transformation** always results in the `same number, N` of elements.


It's critical to not only understand how to perform these actions, but also to <spanstyle style="color:red">develop a high level of proficiency</span> so you can quickly and fluently work with collections.

___

Selection and transformation both use the basics of looping: 

- a <spanstyle style="color:cyan">loop</style>, 
- a <spanstyle style="color:orange">counter</style>, 
- a way to <spanstyle style="color:pink">retrieve the current value</span>,
- way to <spanstyle style="color:red">exit</span> the loop. 

Keep those four things in mind. Also, selection and transformation require criteria that determine the results. Selection needs criteria to determine which elements to select, while transformation uses criteria to determine the transformation.
