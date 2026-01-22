= Information for Development

== Setup and run

To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000

== Notes

=== 10.01.2026

**Context:**  
A table with first column of checkboxes for selection
(e.g. for mass deletion)
means the whole table needs to be in a form.

If a row can be put into an edit mode to modify an existing
row this needs to be in a form as well.

**Problem:**  
Now we have two nested forms which should be avoided.

**Solution (recommended):**  
Put a form with just the delete button inside outside of the table
and set the 'form' attribute on the checkboxes pointing to it:

````html
<form id="bulkDeleteForm" hx-delete="/person/delete">
  <button type="submit" class="button">Delete</button>
</form>
<table>
    <tr>
        <td>
            <input
                type="checkbox"
                name="selection"
                value={props.vm.id}
                form="bulkDeleteForm" // Bind checkbox to outer form 
            >
        </td>
    </tr>
</table>

````

Now the edit-form is not nested anymore and everything works.

**Alternative Solution:**  
introduce a "selection mode" so that
the column with the checkboxes only appears when this
mode is chosen and the mass deletion can be performed.
In this mode editing of rows is prohibited.
When mass deletion is done by the user the table
can be switched back to normal mode.

