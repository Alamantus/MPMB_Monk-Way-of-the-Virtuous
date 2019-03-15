/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Monk, called "Way of the Virtuous"
				This is a homebrewed subclass that provides a Monk with Ki skills focused on support
	Code by:	Alamantus & MorePurpleMoreBetter
	Date:		2019-03-15 (sheet v12.999)
	
	This is a fan-made homebrew to add a new monastic tradition for Monks.
	
	This code is based on version 1.0 by Greg Arehart, taken from DMs Guild here: https://www.dmsguild.com/product/222682/Way-of-the-Virtuous--Monk-Tradition
	
	-IMPORTANT-
	Please make sure you add this code to a completely empty sheet to avoid complications with a pre-existing character.
*/

var iFileName = "Monk - Way of the Virtuous.js";
RequiredSheetVersion(12.999);

SourceList["Monk-Virtuous"] = {
  name: "Way of the Virtuous - Monk Tradition (v1.0 by Greg Arehart)",
  abbreviation: "WotV",
  group: "DMsGuild",
  url: "https://www.dmsguild.com/product/222682/Way-of-the-Virtuous--Monk-Tradition",
  date: "2019/03/15"
};

AddSubClass("monk", "virtuous", {
  regExpSearch: /virtu(e|ous)?/i,
  subname: "Way of the Virtuous",
  fullname: "Monk (Way of the Virtuous)",
  source: ["Monk-Virtuous", 1],
  spellcastingAbility: 5,
  spellcastingFactor: "virtuous1",
  spellcastingList: {
    spells: ["cure wounds", "heroism", "sanctuary", "compelled duel", "aid", "enhance ability", "warding bond", "earthbind", "beacon of hope", "crusader's mantle", "spirit guardians", "haste", "aura of purity", "freedom of movement", "stoneskin", "locate creature"],
  },
  spellcastingKnown: {
    class: "any",
    spells: [0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
  },
  features: {
    "subclassfeature3": {
      name: "Tempered Soul",
      source: ["Monk-Virtuous", 2],
      minlevel: 3,
      description: desc([
        "I can add proficiency to Wisdom saving throws against being charmed",
        "If I already have proficiency in Wisdom saving throws from another source, I can add this",
        "proficiency bonus on top of the other",
      ]),
      savetxt: {
        text: ["+Prof to Wis save vs. charm, x2 if Prof from other source"],
      },
    },
    "subclassfeature3.1": {
      name: "Pillar of Faith",
      source: ["Monk-Virtuous", 2],
      minlevel: 3,
      description : desc([
        "I can cast cantrips/spells from my chosen Virtue using Wisdom as my spellcasting modifier",
				"Use the \"Choose Feature\" button above to select one of the available virtues"
      ]),
      choices: ["Benevolence", "Courage", "Duty", "Honor"],
      "benevolence": {
        name: "Pillar of Faith: Benevolence",
        description: desc([
          "I can spend Ki points equal to the spell level I want to cast without using components",
          "I can spend additional Ki points to cast spells at a higher level, but only if I use fewer",
          "Ki points than my proficiency bonus",
          "Any spells that don't have a range of \"Self\" have their range replaced by \"Touch\"",
          "Available spells at Monk level:",
          "3rd: Cure Wounds; 6th: Aid; 11th: Beacon of Hope; 17th: Aura of Purity",
        ]),
      },
      "courage": {
        name: "Pillar of Faith: Courage",
        description: desc([
          "I can spend Ki points equal to the spell level I want to cast without using components",
          "I can spend additional Ki points to cast spells at a higher level, but only if I use fewer Ki",
          "points than my proficiency bonus",
          "Any spells that don't have a range of \"Self\" have their range replaced by \"Touch\"",
          "Available spells at Monk level:",
          "3rd: Heroism; 6th: Enhance Ability; 11th: Crusader's Mantle; 17th: Freedom of Movement",
        ]),
      },
      "duty": {
        name: "Pillar of Faith: Duty",
        description: desc([
          "I can spend Ki points equal to the spell level I want to cast without using components",
          "I can spend additional Ki points to cast spells at a higher level, but only if I use fewer",
          "Ki points than my proficiency bonus",
          "Any spells that don't have a range of \"Self\" have their range replaced by \"Touch\"",
          "Available spells at Monk level:",
          "3rd: Sanctuary; 6th: Warding Bond; 11th: Spirit Guardians; 17th: Stoneskin",
        ]),
      },
      "honor": {
        name: "Pillar of Faith: Honor",
        description: desc([
          "I can spend Ki points equal to the spell level I want to cast without using components",
          "I can spend additional Ki points to cast spells at a higher level, but only if I use fewer",
          "Ki points than my proficiency bonus",
          "Any spells that don't have a range of \"Self\" have their range replaced by \"Touch\"",
          "Available spells at Monk level:",
          "3rd: Compelled Duel; 6th: Earthbind; 11th: Haste; 17th: Locate Creature",
        ]),
      },
    },
    "subclassfeature6": {
      name: "Serene Presence",
      source: ["Monk-Virtuous", 3],
      minlevel: 6,
      description: desc([
        "All friendly creatures within 60 feet of me at the end of a short rest gain an additional",
        "set of temporary hit points, which do not stack with other temporary hit points and",
        "disappear 1 hour after the short rest has ended",
      ]),
      additional: ["", "", "", "", "", "+1d6 temp hit points", "+1d6 temp hit points", "+1d6 temp hit points", "+1d6 temp hit points", "+1d6 temp hit points", "+1d8 temp hit points", "+1d8 temp hit points", "+1d8 temp hit points", "+1d8 temp hit points", "+1d8 temp hit points", "+1d8 temp hit points", "+1d10 temp hit points", "+1d10 temp hit points", "+1d10 temp hit points", "+1d10 temp hit points"],
    },
    "subclassfeature11": {
      name: "Untapped Potential",
      source: ["Monk-Virtuous", 3],
      minlevel: 11,
      description: desc([
        "I gain additional Ki points on top of my Monk progression",
      ]),
      usages: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
      recovery: "short rest",
    },
    "subclassfeature17": {
      name: "Spiritual Attunement ",
      source: ["Monk-Virtuous", 2],
      minlevel: 17,
      description: desc([
        "Whenever I use Flurry of Blows, I may cast any spell acquired through the Pillar of Faith feature",
        "so long as it has a range of \"Touch\" and I spend the necessary Ki points in addition to the cost of Flurry of Blows",
        "This also allows me to cast any other spell from another source with a range of \"Touch\""
      ]),
    }
  }
});

virtuousSpellTable = [ //Object name; note that there is no "var" here, and that the name of this variable is the name of the spellcastingFactor without any numbers in it and all lower case, plus the text "SpellTable"
  [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0 // this should be all zeroes
  [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1 // there are 9 entries in each array, one for each spell level
  [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
  [1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
  [1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
  [1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
  [0, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 6
  [0, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 7
  [0, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 8
  [0, 1, 0, 0, 0, 0, 0, 0, 0], //lvl 9
  [0, 1, 0, 0, 0, 0, 0, 0, 0], //lvl10
  [0, 0, 1, 0, 0, 0, 0, 0, 0], //lvl11
  [0, 0, 1, 0, 0, 0, 0, 0, 0], //lvl12
  [0, 0, 1, 0, 0, 0, 0, 0, 0], //lvl13
  [0, 0, 1, 0, 0, 0, 0, 0, 0], //lvl14
  [0, 0, 1, 0, 0, 0, 0, 0, 0], //lvl15
  [0, 0, 1, 0, 0, 0, 0, 0, 0], //lvl16
  [0, 0, 0, 1, 0, 0, 0, 0, 0], //lvl17
  [0, 0, 0, 1, 0, 0, 0, 0, 0], //lvl18
  [0, 0, 0, 1, 0, 0, 0, 0, 0], //lvl19
  [0, 0, 0, 1, 0, 0, 0, 0, 0], //lvl20
]

// Missing Player's Handbook Spells
SpellsList["compelled duel"] = {
  name: "Compelled Duel",
  classes: ["paladin"],
  source: ["PHB", 224],
  level: 1,
  school: "Ench",
  time: "1 bns",
  range: "30 ft",
  components: "V",
  duration: "Conc, 1 min",
  save: "Wis",
  description: "1 crea w/i range makes Wis sav throw; on fail, crea is drawn to you & has disadv on atk rolls vs others",
  descriptionFull: "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw.On a failed save, the creature is drawn to you, compelled by your divine demand.For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn’t restrict the target’s movement for that turn.\nThe spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."
};
SpellsList["earthbind"] = {
  name: "Earthbind",
  classes: ["druid", "sorcerer", "warlock", "wizard"],
  source: ["EE-PC", 17],
  level: 2,
  school: "Trans",
  time: "1 a",
  range: "300 ft",
  components: "V",
  duration: "Conc, 1 min",
  save: "Str",
  description: "1 crea within range makes Str saving throw; on fail, target's fly spd is reduced to 0 ft for the duration",
  descriptionFull: "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the spell’s duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends."
};
SpellsList["crusader's mantle"] = {
  name: "Crusader's Mantle",
  classes: ["paladin"],
  source: ["PHB", 230],
  level: 3,
  school: "Evoc",
  time: "1 a",
  range: "Self",
  components: "V",
  duration: "Conc, 1 min",
  description: "Friendly creatures within 30 ft deals an extra 1d4 radiant dmg on hit with weapon",
  descriptionFull: "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
};
SpellsList["aura of purity"] = {
  name: "Aura of Purity",
  classes: ["paladin"],
  source: ["PHB", 216],
  level: 4,
  school: "Abjur",
  time: "1 a",
  range: "Self",
  components: "V",
  duration: "Conc, 10 min",
  description: "Creas w/i 30 ft imm diseas, res poisn, & adv sav throw vs. blnd, charm, deaf, frght, paralyz, poisn, stun",
  descriptionFull: "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you.Each nonhostile creature in the aura(including you) can’t become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blnded, charmed, deafended, frightened, paralyzed, poisoned, and stunned."
};