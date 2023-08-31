// priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  e.create('blank')
  e.create('tool_handle')
  e.create('tough_handle')
  e.create('sheet')

  e.create('pickaxe_head')

  e.create('axe_head')
  e.create('axe_head_gold')
  e.create('axe_head_iron')
  e.create('axe_head_diamond')
  e.create('axe_head_netherite')
  e.create('axe_head_runic')

  e.create('broad_axe_head')
  e.create('broad_axe_head')
  e.create('broad_axe_head_gold')
  e.create('broad_axe_head_iron')
  e.create('broad_axe_head_diamond')
  e.create('broad_axe_head_netherite')
  e.create('broad_axe_head_runic')

  e.create('double_edged_blade')
  e.create('single_edged_blade')

  e.create('hammer_head')
  e.create('rod')

  
  // If you want to specify a different texture location you can do that too, like this:
  // e.create('test_item_1').texture('mobbo:item/lava') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
  
  // // You can chain builder methods as much as you like
  // e.create('test_item_2').maxStackSize(16).glow(true)
  
  // // You can specify item type as 2nd argument in create(), some types have different available methods
  // e.create('custom_sword', 'sword').tier('diamond').attackDamageBaseline(10.0)
})

StartupEvents.registry('fluid', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('molten_bronze').glow(true)
  })