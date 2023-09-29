priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  e.create('blank').texture('molten_metals:item/parts/blank')
  // e.create('handle')
  // e.create('tough_handle')
  // e.create('sheet')

  // Axe
  e.create('axe_head_cast').texture('molten_metals:item/parts/axe_head/cast')
  e.create('axe_head_cast_iron').texture('molten_metals:item/parts/axe_head/iron/cast')
  e.create('axe_head_cast_diamond').texture('molten_metals:item/parts/axe_head/diamond/cast')
  e.create('axe_head_cast_netherite').texture('molten_metals:item/parts/axe_head/netherite/cast')
  e.create('axe_head_cast_runic').texture('molten_metals:item/parts/axe_head/runic/cast')

  e.create('axe_head_iron').texture('molten_metals:item/parts/axe_head/iron/head')
  e.create('axe_head_diamond').texture('molten_metals:item/parts/axe_head/diamond/head')
  e.create('axe_head_netherite').texture('molten_metals:item/parts/axe_head/netherite/head')
  e.create('axe_head_runic').texture('molten_metals:item/parts/axe_head/runic/head')

  // Chakram Blade
  e.create('chakram_blade_cast').texture('molten_metals:item/parts/chakram_blade/cast')
  e.create('chakram_blade_cast_iron').texture('molten_metals:item/parts/chakram_blade/iron/cast')
  e.create('chakram_blade_cast_diamond').texture('molten_metals:item/parts/chakram_blade/diamond/cast')
  e.create('chakram_blade_cast_netherite').texture('molten_metals:item/parts/chakram_blade/netherite/cast')
  e.create('chakram_blade_cast_runic').texture('molten_metals:item/parts/chakram_blade/runic/cast')

  e.create('chakram_blade_iron').texture('molten_metals:item/parts/chakram_blade/iron/blade')
  e.create('chakram_blade_diamond').texture('molten_metals:item/parts/chakram_blade/diamond/blade')
  e.create('chakram_blade_netherite').texture('molten_metals:item/parts/chakram_blade/netherite/blade')
  e.create('chakram_blade_runic').texture('molten_metals:item/parts/chakram_blade/runic/blade')

  // Double Sided Large Blade
  e.create('double_sided_blade_large_cast').texture('molten_metals:item/parts/double_sided_blade_large/cast')
  e.create('double_sided_blade_large_cast_iron').texture('molten_metals:item/parts/double_sided_blade_large/iron/cast')
  e.create('double_sided_blade_large_cast_diamond').texture('molten_metals:item/parts/double_sided_blade_large/diamond/cast')
  e.create('double_sided_blade_large_cast_netherite').texture('molten_metals:item/parts/double_sided_blade_large/netherite/cast')
  e.create('double_sided_blade_large_cast_runic').texture('molten_metals:item/parts/double_sided_blade_large/runic/cast')

  e.create('double_sided_blade_large_iron').texture('molten_metals:item/parts/double_sided_blade_large/iron/blade')
  e.create('double_sided_blade_large_diamond').texture('molten_metals:item/parts/double_sided_blade_large/diamond/blade')
  e.create('double_sided_blade_large_netherite').texture('molten_metals:item/parts/double_sided_blade_large/netherite/blade')
  e.create('double_sided_blade_large_runic').texture('molten_metals:item/parts/double_sided_blade_large/runic/blade')

  // Double Sided Medium Blade
  e.create('double_sided_blade_medium_cast').texture('molten_metals:item/parts/double_sided_blade_medium/cast')
  e.create('double_sided_blade_medium_cast_iron').texture('molten_metals:item/parts/double_sided_blade_medium/iron/cast')
  e.create('double_sided_blade_medium_cast_diamond').texture('molten_metals:item/parts/double_sided_blade_medium/diamond/cast')
  e.create('double_sided_blade_medium_cast_netherite').texture('molten_metals:item/parts/double_sided_blade_medium/netherite/cast')
  e.create('double_sided_blade_medium_cast_runic').texture('molten_metals:item/parts/double_sided_blade_medium/runic/cast')

  e.create('double_sided_blade_medium_iron').texture('molten_metals:item/parts/double_sided_blade_medium/iron/blade')
  e.create('double_sided_blade_medium_diamond').texture('molten_metals:item/parts/double_sided_blade_medium/diamond/blade')
  e.create('double_sided_blade_medium_netherite').texture('molten_metals:item/parts/double_sided_blade_medium/netherite/blade')
  e.create('double_sided_blade_medium_runic').texture('molten_metals:item/parts/double_sided_blade_medium/runic/blade')

  // Double Sided Small Blade
  e.create('double_sided_blade_small_cast').texture('molten_metals:item/parts/double_sided_blade_small/cast')
  e.create('double_sided_blade_small_cast_iron').texture('molten_metals:item/parts/double_sided_blade_small/iron/cast')
  e.create('double_sided_blade_small_cast_diamond').texture('molten_metals:item/parts/double_sided_blade_small/diamond/cast')
  e.create('double_sided_blade_small_cast_netherite').texture('molten_metals:item/parts/double_sided_blade_small/netherite/cast')
  e.create('double_sided_blade_small_cast_runic').texture('molten_metals:item/parts/double_sided_blade_small/runic/cast')

  e.create('double_sided_blade_small_iron').texture('molten_metals:item/parts/double_sided_blade_small/iron/blade')
  e.create('double_sided_blade_small_diamond').texture('molten_metals:item/parts/double_sided_blade_small/diamond/blade')
  e.create('double_sided_blade_small_netherite').texture('molten_metals:item/parts/double_sided_blade_small/netherite/blade')
  e.create('double_sided_blade_small_runic').texture('molten_metals:item/parts/double_sided_blade_small/runic/blade')  

  // Hammer Head
  e.create('hammer_head_cast').texture('molten_metals:item/parts/hammer_head/cast')
  e.create('hammer_head_cast_iron').texture('molten_metals:item/parts/hammer_head/iron/cast')
  e.create('hammer_head_cast_diamond').texture('molten_metals:item/parts/hammer_head/diamond/cast')
  e.create('hammer_head_cast_netherite').texture('molten_metals:item/parts/hammer_head/netherite/cast')
  e.create('hammer_head_cast_runic').texture('molten_metals:item/parts/hammer_head/runic/cast')

  e.create('hammer_head_iron').texture('molten_metals:item/parts/hammer_head/iron/head')
  e.create('hammer_head_diamond').texture('molten_metals:item/parts/hammer_head/diamond/head')
  e.create('hammer_head_netherite').texture('molten_metals:item/parts/hammer_head/netherite/head')
  e.create('hammer_head_runic').texture('molten_metals:item/parts/hammer_head/runic/head')

  // Pickaxe Head
  e.create('pickaxe_head_cast').texture('molten_metals:item/parts/pickaxe_head/cast')
  e.create('pickaxe_head_cast_iron').texture('molten_metals:item/parts/pickaxe_head/iron/cast')
  e.create('pickaxe_head_cast_diamond').texture('molten_metals:item/parts/pickaxe_head/diamond/cast')
  e.create('pickaxe_head_cast_netherite').texture('molten_metals:item/parts/pickaxe_head/netherite/cast')
  e.create('pickaxe_head_cast_runic').texture('molten_metals:item/parts/pickaxe_head/runic/cast')
  
  e.create('pickaxe_head_iron').texture('molten_metals:item/parts/pickaxe_head/iron/head')
  e.create('pickaxe_head_diamond').texture('molten_metals:item/parts/pickaxe_head/diamond/head')
  e.create('pickaxe_head_netherite').texture('molten_metals:item/parts/pickaxe_head/netherite/head')
  e.create('pickaxe_head_runic').texture('molten_metals:item/parts/pickaxe_head/runic/head')

  // Shovel Head
  e.create('shovel_head_cast').texture('molten_metals:item/parts/shovel_head/cast')
  e.create('shovel_head_cast_iron').texture('molten_metals:item/parts/shovel_head/iron/cast')
  e.create('shovel_head_cast_diamond').texture('molten_metals:item/parts/shovel_head/diamond/cast')
  e.create('shovel_head_cast_netherite').texture('molten_metals:item/parts/shovel_head/netherite/cast')
  e.create('shovel_head_cast_runic').texture('molten_metals:item/parts/shovel_head/runic/cast')
  
  e.create('shovel_head_iron').texture('molten_metals:item/parts/shovel_head/iron/head')
  e.create('shovel_head_diamond').texture('molten_metals:item/parts/shovel_head/diamond/head')
  e.create('shovel_head_netherite').texture('molten_metals:item/parts/shovel_head/netherite/head')
  e.create('shovel_head_runic').texture('molten_metals:item/parts/shovel_head/runic/head')

  // Single Sided Large Blade
  e.create('single_sided_blade_large_cast').texture('molten_metals:item/parts/single_sided_blade_large/cast')
  e.create('single_sided_blade_large_cast_iron').texture('molten_metals:item/parts/single_sided_blade_large/iron/cast')
  e.create('single_sided_blade_large_cast_diamond').texture('molten_metals:item/parts/single_sided_blade_large/diamond/cast')
  e.create('single_sided_blade_large_cast_netherite').texture('molten_metals:item/parts/single_sided_blade_large/netherite/cast')
  e.create('single_sided_blade_large_cast_runic').texture('molten_metals:item/parts/single_sided_blade_large/runic/cast')

  e.create('single_sided_blade_large_iron').texture('molten_metals:item/parts/single_sided_blade_large/iron/blade')
  e.create('single_sided_blade_large_diamond').texture('molten_metals:item/parts/single_sided_blade_large/diamond/blade')
  e.create('single_sided_blade_large_netherite').texture('molten_metals:item/parts/single_sided_blade_large/netherite/blade')
  e.create('single_sided_blade_large_runic').texture('molten_metals:item/parts/single_sided_blade_large/runic/blade') 

  // Single Sided Medium Blade
  e.create('single_sided_blade_medium_cast').texture('molten_metals:item/parts/single_sided_blade_medium/cast')
  e.create('single_sided_blade_medium_cast_iron').texture('molten_metals:item/parts/single_sided_blade_medium/iron/cast')
  e.create('single_sided_blade_medium_cast_diamond').texture('molten_metals:item/parts/single_sided_blade_medium/diamond/cast')
  e.create('single_sided_blade_medium_cast_netherite').texture('molten_metals:item/parts/single_sided_blade_medium/netherite/cast')
  e.create('single_sided_blade_medium_cast_runic').texture('molten_metals:item/parts/single_sided_blade_medium/runic/cast')

  e.create('single_sided_blade_medium_iron').texture('molten_metals:item/parts/single_sided_blade_medium/iron/blade')
  e.create('single_sided_blade_medium_diamond').texture('molten_metals:item/parts/single_sided_blade_medium/diamond/blade')
  e.create('single_sided_blade_medium_netherite').texture('molten_metals:item/parts/single_sided_blade_medium/netherite/blade')
  e.create('single_sided_blade_medium_runic').texture('molten_metals:item/parts/single_sided_blade_medium/runic/blade')

  // Single Sided Small Blade
  e.create('single_sided_blade_small_cast').texture('molten_metals:item/parts/single_sided_blade_small/cast')
  e.create('single_sided_blade_small_cast_iron').texture('molten_metals:item/parts/single_sided_blade_small/iron/cast')
  e.create('single_sided_blade_small_cast_diamond').texture('molten_metals:item/parts/single_sided_blade_small/diamond/cast')
  e.create('single_sided_blade_small_cast_netherite').texture('molten_metals:item/parts/single_sided_blade_small/netherite/cast')
  e.create('single_sided_blade_small_cast_runic').texture('molten_metals:item/parts/single_sided_blade_small/runic/cast')

  e.create('single_sided_blade_small_iron').texture('molten_metals:item/parts/single_sided_blade_small/iron/blade')
  e.create('single_sided_blade_small_diamond').texture('molten_metals:item/parts/single_sided_blade_small/diamond/blade')
  e.create('single_sided_blade_small_netherite').texture('molten_metals:item/parts/single_sided_blade_small/netherite/blade')
  e.create('single_sided_blade_small_runic').texture('molten_metals:item/parts/single_sided_blade_small/runic/blade')

  // Thin Medium Blade
  e.create('thin_blade_medium_cast').texture('molten_metals:item/parts/thin_blade_medium/cast')
  e.create('thin_blade_medium_cast_iron').texture('molten_metals:item/parts/thin_blade_medium/iron/cast')
  e.create('thin_blade_medium_cast_diamond').texture('molten_metals:item/parts/thin_blade_medium/diamond/cast')
  e.create('thin_blade_medium_cast_netherite').texture('molten_metals:item/parts/thin_blade_medium/netherite/cast')
  e.create('thin_blade_medium_cast_runic').texture('molten_metals:item/parts/thin_blade_medium/runic/cast')

  e.create('thin_blade_medium_iron').texture('molten_metals:item/parts/thin_blade_medium/iron/blade')
  e.create('thin_blade_medium_diamond').texture('molten_metals:item/parts/thin_blade_medium/diamond/blade')
  e.create('thin_blade_medium_netherite').texture('molten_metals:item/parts/thin_blade_medium/netherite/blade')
  e.create('thin_blade_medium_runic').texture('molten_metals:item/parts/thin_blade_medium/runic/blade')

  // Thin Small Blade
  e.create('thin_blade_small_cast').texture('molten_metals:item/parts/thin_blade_small/cast')
  e.create('thin_blade_small_cast_iron').texture('molten_metals:item/parts/thin_blade_small/iron/cast')
  e.create('thin_blade_small_cast_diamond').texture('molten_metals:item/parts/thin_blade_small/diamond/cast')
  e.create('thin_blade_small_cast_netherite').texture('molten_metals:item/parts/thin_blade_small/netherite/cast')
  e.create('thin_blade_small_cast_runic').texture('molten_metals:item/parts/thin_blade_small/runic/cast')

  e.create('thin_blade_small_iron').texture('molten_metals:item/parts/thin_blade_small/iron/blade')
  e.create('thin_blade_small_diamond').texture('molten_metals:item/parts/thin_blade_small/diamond/blade')
  e.create('thin_blade_small_netherite').texture('molten_metals:item/parts/thin_blade_small/netherite/blade')
  e.create('thin_blade_small_runic').texture('molten_metals:item/parts/thin_blade_small/runic/blade')

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
    e.create('molten_runic')
  })