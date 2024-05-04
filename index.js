function romain(str) {

      const map  = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
      }
    
      let result = 0
      let prev = 0
    
      for(let i = str.length - 1; i >= 0; i--) {
        let curr = map[str[i] * 1]
    
        if(curr > prev) {
          result -= curr
        } else {
          result += curr
        }
    
        prev = curr
      }
    
      console.log(result);
    }
    
    romain("15");