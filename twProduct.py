# create a for loop to run through the list

# if the target is not divisible by the value continue

# else record the number and its index in dictionary

# now every value check of the complement is in the hashmap, if yes return else record in hasmap

def pair_product(numbers, target_product):
  dict ={}

  for index,num in enumerate (numbers):
    if target_product%num == 0:
        if(target_product/num in dict):
          return (dict[target_product/num],index)
        else:
          dict[num] = index
