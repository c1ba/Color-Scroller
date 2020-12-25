$(document).ready(function(){
    let code_string="", part_1=["C", 7], part_2=[0, 0], part_3=[0, 0], code_array=[part_1.join(""), part_2.join(""), part_3.join("")], char_stat_1 = 0, char_stat_2 = 0, cycle_stage_up=0, switch_up = false, switch_down = false;
    const max_val="C7", min_val="00", char_array=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    code_string = code_array.join("");
    console.log(code_array);
    $('html').css("background-color","#"+code_string);
    $('body').css("background-color","#"+code_string);
    window.addEventListener('wheel', event=>{
        console.log(event.deltaY);
        if(event.deltaY <0){
            switch_up = true;
            switch(cycle_stage_up){
                case(0):
                if(switch_down == false){
                    if(part_3.join("")!=max_val){
                        if(part_3[1]!="F"){
                            part_3[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_3[0]=char_array[char_stat_2];
                            part_3[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   else{
                         cycle_stage_up++;
                         char_stat_1 = char_array.length-7;
                         char_stat_2 = char_array.length-4;}
                }
                else {
                    if(part_2.join("")!=min_val){
                        if(part_2[1]!=0){
                            part_2[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_2[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_2[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         char_stat_1 = 0;
                         char_stat_2 = 0;
                         switch_down = false;}
                }
                break;
                case(1):
                if(switch_down == false) {
                    if(part_1.join("")!=min_val){
                        if(part_1[1]!=0){
                            part_1[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_1[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_1[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }               
                   else{
                    cycle_stage_up++;
                    char_stat_1 = 0;
                    char_stat_2 = 0;}
                }
                else {
                    if(part_1.join("")!=max_val){
                        if(part_1[1]!="F"){
                            part_1[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_1[0]=char_array[char_stat_2];
                            part_1[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   else{
                         switch_down = false;
                         char_stat_1 = char_array.length-7;
                         char_stat_2 = char_array.length-4;}
                }

                break;
                case(2):
                if(switch_down == false){
                    if(part_2.join("")!=max_val){
                        if(part_2[1]!="F"){
                            part_2[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_2[0]=char_array[char_stat_2];
                            part_2[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   else{
                         cycle_stage_up++;
						 char_stat_1 = char_array.length-7;
                         char_stat_2 = char_array.length-4;}
                }
                else {
                    if(part_3.join("")!=min_val){
                        if(part_3[1]!=0){
                            part_3[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_3[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_3[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         switch_down = false;
                         char_stat_1 = 0;
                         char_stat_2 = 0;}
                }
                break;
                case(3):
                if(switch_down == false){
                    if(part_3.join("")!=min_val){
                        if(part_3[1]!=0){
                            part_3[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_3[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_3[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         cycle_stage_up++;
                         char_stat_1 = 0;
                         char_stat_2 = 0;}
                }
                else {
                    if(part_2.join("")!=max_val){
                        if(part_2[1]!="F"){
                            part_2[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_2[0]=char_array[char_stat_2];
                            part_2[1]=0;
                            char_stat_1 = 0;
                        }
    
                    }
                    else{
                        switch_down = false;
                        char_stat_1 = char_array.length-9;
                        char_stat_2 = char_array.length-4;}
                }
                break;
                case(4):
                if(switch_down == false){
                    if(part_1.join("")!=max_val){
                        if(part_1[1]!="F"){
                            part_1[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_1[0]=char_array[char_stat_2];
                            part_1[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   else{
                         cycle_stage_up++;
                         char_stat_1 = char_array.length-7;
                         char_stat_2 = char_array.length-4;}
                }
                else {
                    if(part_1.join("")!=min_val){
                        if(part_1[1]!=0){
                            part_1[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_1[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_1[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         switch_down = false;
                         char_stat_1 = 0;
                         char_stat_2 = 0;}
                }
                break;
                case(5):
                if(switch_down == true){
                    if(part_2.join("")!=min_val){
                        if(part_2[1]!=0){
                            part_2[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_2[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_2[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         cycle_stage_up=0;
                         char_stat_1 = 0;
                         char_stat_2 = 0;}
                }
                else {
                    if(part_3.join("")!=max_val){
                        if(part_3[1]!="F"){
                            part_3[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_3[0]=char_array[char_stat_2];
                            part_3[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   else{
                         switch_down = false;
                         char_stat_1 = char_array.length-7;
                         char_stat_2 = char_array.length-4;}
                }
                break;
            }

        }
        else {
            switch_down = true;
            switch(cycle_stage_up){
                case(0):
                if(part_3.join("")!=min_val){
                    if(part_3[1]!=0){
                        part_3[1]=char_array[char_stat_1];
                        char_stat_1--;
                    }
                    else {
                        part_3[0]=char_array[char_stat_2];
                        char_stat_2--;
                        part_3[1]=9;
                        char_stat_1 = char_array.length-7;
                    }
               }
               else if(part_2.join("")!=max_val){
                    if(part_2[1]!="F"){
                        part_2[1]=char_array[char_stat_1];
                        char_stat_1++;
                    }
                    else {
                        char_stat_2++;
                        part_2[0]=char_array[char_stat_2];
                        part_2[1]=0;
                        char_stat_1 = 0;
                    }

                }
                else {
                    cycle_stage_up++;
                     char_stat_1 = char_array.length-7;
                     char_stat_2 = char_array.length-4;
                }
                break;
                case(1):
                if(switch_up == false){
                    if(part_1.join("")!=min_val){
                        if(part_1[1]!=0){
                            part_1[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_1[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_1[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         cycle_stage_up++;
                         char_stat_1 = 0;
                         char_stat_2 = 0;}
                }
                else {
                    if(part_3.join("")!=min_val){
                        if(part_3[1]!=0){
                            part_3[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_3[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_3[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         switch_up = false;
                         char_stat_1 = 0;
                         char_stat_2 = 0;}
                }
                break;
                case(2):
                if(switch_up == false){
                    if(part_3.join("")!=max_val){
                        if(part_3[1]!="F"){
                            part_3[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_3[0]=char_array[char_stat_2];
                            part_3[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   else{
                         cycle_stage_up++;
                         char_stat_1 = char_array.length-7;
                         char_stat_2 = char_array.length-4;}
                }
                else {
                    if(part_2.join("")!=min_val){
                        if(part_2[1]!=0){
                            part_2[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_2[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_2[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         char_stat_1 = 0;
                         char_stat_2 = 0;
                         switch_up = false;}
                }
                break;
                case(3):
                   if(switch_up == false){
                    if(part_2.join("")!=min_val){
                        if(part_2[1]!=0){
                            part_2[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_2[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_2[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         cycle_stage_up++;
                         char_stat_1 = 0;
                         char_stat_2 = 0;}
                   }
                   else {
                    if(part_3.join("")!=max_val){
                        if(part_3[1]!="F"){
                            part_3[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_3[0]=char_array[char_stat_2];
                            part_3[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   }
                break;
                case(4):
                if(switch_up == false){
                    if(part_1.join("")!=max_val){
                        if(part_1[1]!="F"){
                            part_1[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            part_1[0]=char_array[char_stat_2];
                            char_stat_2++;
                            part_1[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   else{
                          char_stat_1 = char_array.length-7;
                          char_stat_2 = char_array.length-4;
                         cycle_stage_up++;}
                }
                else {
                    if(part_1.join("")!=min_val){
                        if(part_1[1]!=0){
                            part_1[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_1[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_1[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         switch_down = false;
                         char_stat_1 = 0;
                         char_stat_2 = 0;} 
                }
                break;
                case(5):
                if(switch_up == false){
                    if(part_3.join("")!=min_val){
                        if(part_3[1]!=0){
                            part_3[1]=char_array[char_stat_1];
                            char_stat_1--;
                        }
                        else {
                            part_3[0]=char_array[char_stat_2];
                            char_stat_2--;
                            part_3[1]=9;
                            char_stat_1 = char_array.length-7;
                        }
                   }
                   else{
                         cycle_stage_up=0;
                         char_stat_1 = 0;
                         char_stat_2 = 0;}
                }
                else {
                    if(part_2.join("")!=max_val){
                        if(part_2[1]!="F"){
                            part_2[1]=char_array[char_stat_1];
                            char_stat_1++;
                        }
                        else {
                            char_stat_2++;
                            part_2[0]=char_array[char_stat_2];
                            part_2[1]=0;
                            char_stat_1 = 0;
                        }
                   }
                   else{
                         switch_up = false;}  
                }
                break;
            }
        }
        
        console.log(part_1, part_2, part_3);
        console.log("Up: "+ switch_up+ " Down: "+switch_down);
        console.log("Stage: "+cycle_stage_up);
        code_array=[part_1.join(""), part_2.join(""), part_3.join("")];
        code_string = code_array.join("");
        $('body').css("background-color","#"+code_string);
    });
});