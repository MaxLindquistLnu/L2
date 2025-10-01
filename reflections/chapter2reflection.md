## Chapter Reflection – Chapter 2

Chapter 2 of *Clean Code* emphasizes the importance of clear and informative names.  
I think my class names (`CaesarCipher`, `VigenereCipher`) are good examples of intention-revealing names, since they directly state which cipher is being used. However, I realize that `CharHelper` breaks the principle of avoiding generic names. “Helper” adds little context and could be made more descriptive. The same issue applies to some parameter names: `shift` or `input` are less clear than `shiftValue` or `plainText`. I see that I should have placed more focus on consistency and avoiding ambiguity.  
