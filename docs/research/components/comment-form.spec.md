# CommentForm Specification

## Overview
- **Target file:** `src/components/CommentForm.tsx`
- **Interaction model:** static (UI only, no submission)

## DOM Structure
```html
<div id="respond" class="comment-respond">
  <h3 id="reply-title" class="comment-reply-title">
    Leave a Reply
    <small><a rel="nofollow" id="cancel-comment-reply-link" href="/data-chart#respond" style="display:none;">Cancel reply</a></small>
  </h3>
  <form action="" method="post" id="commentform" class="comment-form">
    <p class="comment-notes">
      <span id="email-notes">Your email address will not be published.</span>
      <span class="required-field-message">Required fields are marked <span class="required">*</span></span>
    </p>
    <textarea id="comment" name="comment" maxlength="1000" required placeholder="評論、意見或反饋"></textarea>
    <p class="comment-form-author">
      <label for="author">Name <span class="required">*</span></label>
      <input id="author" name="author" type="text" required>
    </p>
    <p class="comment-form-email">
      <label for="email">Email <span class="required">*</span></label>
      <input id="email" name="email" type="text" required>
    </p>
    <!-- hidden fields -->
    <p class="form-submit"><input type="submit" value="提交留言" class="submit"></p>
  </form>
</div>
```

## Computed Styles (exact values)

### Comment Respond Container
- display: block
- padding: 0px
- margin: 0px
- backgroundColor: transparent

### Reply Title (h3)
- fontSize: 20px (matches other h3s)
- fontFamily: Palatino family
- fontWeight: 500
- margin: 0px 0px something

### Textarea
- width: 100%
- min-height: ~100px (estimate)
- border: standard Bulma styling
- borderRadius: (Bulma default)

### Input Fields
- Bulma `.input` class styling
- width: 100% or auto

### Labels
- fontSize: 14px
- color: rgb(74, 74, 74)

### Submit Button
- Bulma `.button` or `.is-primary` class
- text: "提交留言"

## Text Content
- Reply title: "Leave a Reply"
- Notes: "Your email address will not be published. Required fields are marked *"
- Textarea placeholder: "評論、意見或反饋"
- Name label: "Name *"
- Email label: "Email *"
- Submit button: "提交留言"
- Cancel reply: "Cancel reply"