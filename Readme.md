# SahiNotes

## Functionalities- 
1. User should be able to signup/signin using email and password auth.
2. User should be able to signup/signin using google auth.
3. User should be able to verify his/her mobile number.
4. User should be able to reset password using his email.
5. User should be able to reset password using his mobile number if it is verified.
6. User should be able to upload pdf notes in their profile.
7. User should be able to view pdf notes uploaded by another user.
8. User should be able to like their own as well as another user's notes.
9. User should be able to remove their like from a liked notes.
10. User should be able to comment on their own as well as another user's notes. 
11. User should recieve email while sigining up.
12. Serve should be able to prioritise jobs. (Won't require API)
13. User should be able to logout the website.
14. Share notes via compying urls. (Won't require API)
15. User should be able to download the pdf notes. (Won't require API)
16. previews of pdf notes should be visible to the user.
17. User should be able to save the pdf notes in their profile using localstorage and database. (Won't require API)

## APIs
1. /users/auth/signup
req - name, email id, password

2. /users/auth/signin
req- email id, password

3. /users/auth/mobile/sendotp
req - mobile

4. users/auth/mobile/verifyotp
req - otp 

5. /users/auth/mobile/deleteotp

6. users/auth/password_reset

7. /users/auth/password_update
req - new password, confirm password

8. /users/notes/upload
req - name, about, file

9. /users/likes/like/?note_id=note_id
req - name, about,  comments, likes, file, author name

10. /users/likes/like/?note_id = note_id

11. /users/likes/unlike/?note_id = note_id

12. /users/comments/add_comment/?note_id = note_id&type=notes

13. /users/comments/add_comment/?comment_id = cooment_id&type = comments

14. /users/emails/new_signup/?email=email

15. /users/auth/logout

16. /users/notes/preview/?note_id=note_id

## Models

1. User - Name, email, password, list of liked notes, list of comments (ID), notes (ID), mobile, otp

2. Notes - name, about, filepath, preview image path, user id, list of likes, list of first level comments

3. Comments - text, list of child comments, notes id, comment id, type (Either note or on comment), user_id

## Future Scope

1. Likes on comment