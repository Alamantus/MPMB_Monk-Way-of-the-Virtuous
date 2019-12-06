/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Rogue, called "Bandit"
				This is a homebrewed subclass that provides a Rogue with a focus on thuggish tactics.
	Code by:	Alamantus & MorePurpleMoreBetter
	Date:		2019-03-15 (sheet v12.999)
	
	This is a fan-made homebrew to add a new archetype for Rogues.
	
	This code is based on version 1.0 by Diego Bastet, taken from DMs Guild here: https://www.dmsguild.com/product/171841/3-Archetypes-09--Rogue
	
	-IMPORTANT-
	Please make sure you add this code to a completely empty sheet to avoid complications with a pre-existing character.
*/

var iFileName = "Rogue_Bandit.js";
RequiredSheetVersion(12.999);

SourceList["3-Archetypes-09-Rogue"] = {
  name: "3 Archetypes #09 - Rogue (by Diego Bastet)",
  abbreviation: "3ARo",
  group: "DMsGuild",
  url: "https://www.dmsguild.com/product/171841/3-Archetypes-09--Rogue",
  date: "2019/12/06"
};

AddSubClass("rogue", "bandit", {
  regExpSearch: /(bandit|brigand|enforcer|highwayman|mobster|thug|)/i,
  subname: "Bandit",
  fullname: "Rogue (Bandit)",
  source: ["3-Archetypes-09-Rogue", 2],
  features: {
    "subclassfeature3": {
      name: "Heavyweight",
      source: ["3-Archetypes-09-Rogue", 2],
      minlevel: 3,
      description: desc([
        "I gain proficiency in Medium Armor and the Intimidation skill.",
      ]),
      skillstxt : [
        "\n\n" + toUni("Bandit") + ": You have proficiency in Intimidation",
      ],
      skills: ["Intimidation"],
      armor : [ // the 4 entries are for: ["light", "medium", "heavy", "shields"]
        [true, true, false, false], //the armor proficiencies if this is the first or only class
        [true, true, false, false], //the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
      ],
    },
    "subclassfeature3.1": {
      name: "Ruffian",
      source: ["3-Archetypes-09-Rogue", 2],
      minlevel: 3,
      description: desc([
        "I can sneak attack with any weapon I am proficient in, even those without finesse/ranged",
      ]),
    },
    "subclassfeature9": {
      name: "Fear Tactics",
      source: ["3-Archetypes-09-Rogue", 2],
      minlevel: 9,
      description: desc([
        "I have advantage on Intimidation (Cha) checks made to interrogate, torture, and extort.",
        "Additionally, if I interrogate an previously-downed enemy (within past 24 hours), you",
        "automatically succeed on Intimidation (Cha) checks with that creature",
      ]),
    },
    "subclassfeature13": {
      name: "Abduction",
      source: ["3-Archetypes-09-Rogue", 2],
      minlevel: 13,
      description: desc([
        "I don't need advantage on the attack roll to Sneak Attack if opponent is grappled.",
        "Also, creatures grappled by me can't speak or use Verbal components",
      ]),
    },
    "subclassfeature17": {
      name: "The Untouchable",
      source: ["3-Archetypes-09-Rogue", 2],
      minlevel: 17,
      description: desc([
        "There's an aura of mystique around my persona: When I hit a creature with Sneak Attack,",
        "that creature has disadv. on attacks made against me until the start of my next turn",
      ]),
    },
  }
});