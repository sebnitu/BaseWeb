<div class="demo-intro">
    <header class="demo-header">
        <h1>Tables</h1>
    </header><!-- .demo-header -->
</div><!-- .demo-intro -->

<div class="demo">

    <div class="demo-description">
        <h2>Table Options</h2>
        <form id="table-classes">
        
            <select name="class">
                <option value="">Default</option>
                <option value="padded">Padded</option>
                <option value="rowed">Rowed</option>
                <option value="columned">Columned</option>
                <option value="bordered" selected="selected">Bordered</option>
            </select>
            
            <select name="class">
                <option value="">Default</option>
                <option value="stripes" selected="selected">Horizontal Stripes</option>
                <option value="stripes-vertical">Vertical Stripes</option>
            </select>
            
            <label class="checkbox">
                <input type="checkbox" name="auxilary-classes" value="hover" class="checkbox" checked="checked">
                Hover
            </label>
            
            <label class="checkbox">
                <input type="checkbox" name="auxilary-classes" value="condensed" class="checkbox">
                Condensed
            </label>

        </form>
    </div>
    <div class="demo-block demo-table">
        <p>Current table classes: <code id="table-classes-output">class="bordered stripes hover"</code></p>
        <table id="table-demo" class="bordered stripes hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Sebastian</td>
                    <td>Nitu</td>
                    <td><a href="#">@sebnitu</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Emilia</td>
                    <td>Nitu</td>
                    <td><a href="#">@emnitu</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lea</td>
                    <td>Nitu</td>
                    <td><a href="#">@leanitu</a></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ava</td>
                    <td>Nitu</td>
                    <td><a href="#">@avanitu</a></td>
                </tr>
            </tbody>
        </table>
    </div>
        
</div><!-- .demo -->