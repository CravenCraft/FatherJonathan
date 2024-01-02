import crafttweaker.api.events.CTEventManager;
import mods.gamestages.events.GameStageAdded;
import mods.gamestages.StageHelper;

// World Bosses

// Will grant the gamestage for killing the Cave Dweller (which removes its ability to spawn)
StageHelper.grantStageOnKill(<entitytype:cave_dweller:cave_dweller>, (player, target) => {

    player.sendMessage("The Dweller has been slane.");
    player.give(<item:paraglider:stamina_vessel>);
}, "cave_dweller_slane");

// Will grant the gamestage for killing The Man From The Fog (which removes its ability to spawn)
StageHelper.grantStageOnKill(<entitytype:man:managgresive>, (player, target) => {

    player.sendMessage("The Man has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "the_man_slane");

// ------------------------------ Minecraft Bosses ------------------------------
StageHelper.grantStageOnKill(<entitytype:minecraft:wither>, (player, target) => {

    player.sendMessage("The Wither has been slane.");
    player.give(<item:paraglider:stamina_vessel>);
}, "wither_slane");

StageHelper.grantStageOnKill(<entitytype:minecraft:ender_dragon>, (player, target) => {

    player.sendMessage("The Ender Dragon has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "ender_dragon_slane");

// ------------------------------ Iron's Spells & Spellbooks Boss ------------------------------
StageHelper.grantStageOnKill(<entitytype:irons_spellbooks:dead_king>, (player, target) => {

    player.sendMessage("The Dead King has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "dead_king_slane");

// ------------------------------ The Graveyard Boss ------------------------------
StageHelper.grantStageOnKill(<entitytype:graveyard:lich>, (player, target) => {

    player.sendMessage("The Corrupted Champion has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "corrupted_champion_slane");

// ------------------------------ Aquamirae Boss ------------------------------
StageHelper.grantStageOnKill(<entitytype:aquamirae:captain_cornelia>, (player, target) => {

    player.sendMessage("Captain Cornelia has been slane.");
    player.give(<item:paraglider:stamina_vessel>);
}, "captain_cornelia_slane");

// ------------------------------ Alex's Mobs Bosses ------------------------------
StageHelper.grantStageOnKill(<entitytype:alexsmobs:void_worm>, (player, target) => {

    player.sendMessage("The Void Worm has been slane.");
    player.give(<item:paraglider:stamina_vessel>);
}, "void_worm_slane");

// ------------------------------ Cataclysm Bosses ------------------------------

StageHelper.grantStageOnKill(<entitytype:cataclysm:ancient_remnant>, (player, target) => {

    player.sendMessage("The Remnant has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "ancient_remnant_slane");

StageHelper.grantStageOnKill(<entitytype:cataclysm:the_harbinger>, (player, target) => {

    player.sendMessage("The Harbinger has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "harbinger_slane");

StageHelper.grantStageOnKill(<entitytype:cataclysm:the_leviathan>, (player, target) => {

    player.sendMessage("The Leviathan has been slane.");
    player.give(<item:paraglider:stamina_vessel>);
}, "leviathan_slane");

StageHelper.grantStageOnKill(<entitytype:cataclysm:ignis>, (player, target) => {

    player.sendMessage("Ignis has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "ignis_slane");

StageHelper.grantStageOnKill(<entitytype:cataclysm:netherite_monstrosity>, (player, target) => {

    player.sendMessage("The Netherite Monstrosity has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "netherite_monstrosity_slane");

StageHelper.grantStageOnKill(<entitytype:cataclysm:ender_guardian>, (player, target) => {

    player.sendMessage("The Ender Guardian has been slane.");
    player.give(<item:paraglider:heart_container>);
}, "ender_guardian_slane");