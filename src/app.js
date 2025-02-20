let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'raccoon']; 
let extensions = ['.com', '.net', '.us', '.io'];

    for (let pronouns of pronoun) { 
      for (let adjs of adj) {
        for (let nouns of noun) {
          for (let extension of extensions) {
            console.log(pronouns + adjs + nouns + extension);
          
          } 
        // Domain hacks
        let lastTwo = nouns.slice(-2);
        let domainHackExt = '.' + lastTwo
        if (extensions.includes(domainHackExt)) {
          console.log(pronouns + adjs + nouns.slice(0, -2) + domainHackExt) 
      }
    }
  }
}
