function change_answer1(a){if(security_enhance_flag){if(answer1_empty!=0&&focus_trigger_flag1==0){focus_trigger_flag1=1;if(get_browser()=="Firefox"){a.value="";a.type="text"}else{a.outerHTML='<input type="text" autocomplete="off" maxLength="64" size="30" name="answer1" id="answer1"  onFocus="this.select();change_answer1();" >';document.forms[0].answer1.select()}}}}function change_answer2(a){if(security_enhance_flag){if(answer2_empty!=0&&focus_trigger_flag2==0){focus_trigger_flag2=1;if(get_browser()=="Firefox"){a.value="";a.type="text"}else{a.outerHTML='<input type="text" autocomplete="off" maxLength="64" size="30" name="answer2" id="answer2"  onFocus="this.select();change_answer2();" >';document.forms[0].answer2.select()}}}}function validatepassword(){var d="image/checkbox-selected-gry.svg";var f="image/checkbox-selected.svg";var g=0,h=0,b=0;var a=document.forms[0];var c=a.sysNewPasswd.value;if(c==""){a.apply.disabled=true}var j=new RegExp("[a-z]");var e=j.test(c);if(e){a.pwd_complex2.src=f;g++}else{a.pwd_complex2.src=d}j=new RegExp("[A-Z]");e=j.test(c);if(e){a.pwd_complex1.src=f;g++}else{a.pwd_complex1.src=d}j=new RegExp("[0-9]");e=j.test(c);if(e){a.pwd_complex3.src=f;g++}else{a.pwd_complex3.src=d}j=new RegExp("((?=[\x21-\x7e]+)[^A-Za-z0-9])");e=j.test(c);if(e){a.pwd_complex4.src=f;g++}else{a.pwd_complex4.src=d}if(g>2){a.pwd_complex.src=f}else{a.pwd_complex.src=d}if(c.length>=6&&c.length<=32){a.pwd_len.src=f;h=1}else{a.pwd_len.src=d}j=new RegExp("^.*(.)\\1{2}.*$");e=j.test(c);if(!e){a.pwd_identical.src=f;b=1}else{a.pwd_identical.src=d}if(g>2&&h&&b){document.getElementById("passwd_hint").style.display="none";a.pwd_warn.src="image/check.png"}else{document.getElementById("passwd_hint").style.display="";a.pwd_warn.src="image/warning_flag.jpg"}}function change_display(){if(security_enhance_flag){document.forms[0].apply.disabled="";document.forms[0].pwd_warn.style.display="";document.getElementById("passwd_hint").style.display="none"}}function checkpasswd(a){for(i=0;i<a.sysNewPasswd.value.length;i++){if(isValidChar_space(a.sysNewPasswd.value.charCodeAt(i))==false){alert("$password_error");return false}}if(security_enhance_flag&&a.sysNewPasswd.value.length<6){alert("Your password must contain six or more characters.");return false}if(security_enhance_flag&&(a.sysNewPasswd.value=="password")){a.apply.disabled=true;alert("$must_change_passwd");return false}if(security_enhance_flag&&a.sysNewPasswd.value==""){alert("You must enter a password");a.apply.disabled=true;return false}if(a.sysNewPasswd.value.length>=33||a.sysConfirmPasswd.value.length>=33){alert("$max_password_length");return false}if(a.sysNewPasswd.value!=a.sysConfirmPasswd.value){alert("$newpas_notmatch");return false}if(a.sysOldPasswd.value!=""&&a.sysNewPasswd.value==""){alert("$password_null");return false}if(a.enable_recovery.checked==true){a.hidden_enable_recovery.value="1";if(a.question1.value=="0"||a.question2.value=="0"){alert("$select_quest");return false}if(a.answer1.value==""||a.answer2.value==""){alert("$enter_answer");return false}if(a.answer1.value.length>64||a.answer2.value.length>64){alert("$invalid_answer");return false}for(i=0;i<a.answer1.value.length;i++){if(isValidChar_space(a.answer1.value.charCodeAt(i))==false){alert("$invalid_answer");return false}}for(i=0;i<a.answer2.value.length;i++){if(isValidChar_space(a.answer2.value.charCodeAt(i))==false){alert("$invalid_answer");return false}}}else{if(a.sysOldPasswd.value!=""){if(confirm("$pwd_recovery_to_default \n$are_you_sure_not_enable_recovery")==false){return false}}a.hidden_enable_recovery.value="0"}a.sysOldPasswd.value=$$.base64.encode(a.sysOldPasswd.value);a.sysNewPasswd.value=$$.base64.encode(a.sysNewPasswd.value);a.sysConfirmPasswd.value=a.sysNewPasswd.value;if(security_enhance_flag){a.hid_answer1_change.value=focus_trigger_flag1;a.hid_answer2_change.value=focus_trigger_flag2}a.hid_answer1.value=$$.base64.encode(a.answer1.value);a.hid_answer2.value=$$.base64.encode(a.answer2.value);a.answer1.value="******";a.answer2.value="******";a.submit();return true};