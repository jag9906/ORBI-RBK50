function hdd_user_add(cf,flag){if(cf.sh_name.value==""){alert("$device_name_null");return false}for(i=0;i<cf.sh_name.value.length;i++){if(isValidChar(cf.sh_name.value.charCodeAt(i))==false){alert("$device_name_error");return false}}for(i=0;i<cf.hddNewPasswd.value.length;i++){if(isValidChar_space(cf.hddNewPasswd.value.charCodeAt(i))==false){alert("$password_error");return false}}if(flag=="add"){if(cf.hddNewPasswd.value.length==33||cf.hddConfirmPasswd.value.length==33){alert("$max_password_length");return false}if(cf.hddNewPasswd.value!=cf.hddConfirmPasswd.value){alert("$newpas_notmatch");return false}}if(cf.hddNewPasswd.value==""){alert("$password_null");return false}cf.hddNewPasswd.value=cf.hddNewPasswd.value.replace(/&/g,"&#38;").replace(/\s/g,"&nbsp;");for(i=1;i<=array_num;i++){var str=eval("userhddArray"+i);var each_info=str.split(" ");if(flag=="edit"){if(sel_editnum!=i){if(each_info[0]==cf.sh_name.value){show_edit_dup_warn();return false}}}else{if(each_info[0]==cf.sh_name.value){show_add_dup_warn();cf.duplicated_num.value=1;cf.duplicated_shname.value=i.toString();return false}}}}function hdd_user_editnum(b){if(array_num==0){alert("$port_edit");return false}var c=0;var a;if(array_num==1){if(b.name_Select[1].checked==true){c++;a=1}}else{for(i=1;i<=array_num;i++){if(b.name_Select[i].checked==true){c++;a=i}}}if(c==0){alert("$port_edit");return false}else{b.select_edit.value=a;b.submit_flag.value="shname_editnum";b.action="/apply.cgi?/hdd_edit_user.htm timestamp="+ts;return true}}function hdd_usr_del(b){if(array_num==0){alert("$port_del");return false}var c=0;var a;if(array_num==1){if(b.name_Select[1].checked==true){c++;a=1}}else{for(i=1;i<=array_num;i++){if(b.name_Select[i].checked==true){c++;a=i}}}if(c==0){alert("$port_del");return false}else{b.select_del.value=a;b.submit_flag.value="shname_del";return true}};