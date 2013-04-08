<div class="demo-intro">
    <header class="demo-header">
        <h1>Tables</h1>
    </header><!-- .demo-header -->
</div><!-- .demo-intro -->

<div class="demo">

    <div class="demo-description">
        <form id="table-classes" class="classes-toggle-widget">
            
            <div class="group">
                <div class="group-key">
                    <label>Table Styles</label>
                </div>
                <div class="group-value">
                    <select name="style-class">
                        <option value="">Default</option>
                        <option value="padded">Padded</option>
                        <option value="rowed">Rowed</option>
                        <option value="columned">Columned</option>
                        <option value="bordered" selected="selected">Bordered</option>
                    </select>
                </div>
            </div>
            
            <div class="group">
                <div class="group-key">
                    <label>Stripe Class</label>
                </div>
                <div class="group-value">
                    <select name="stripe-class">
                        <option value="">Default</option>
                        <option value="stripes" selected="selected">Horizontal Stripes</option>
                        <option value="stripes-vertical">Vertical Stripes</option>
                    </select>
                </div>
            </div>
            
            <div class="group">
                <div class="group-key">
                    <label>Auxiliary Classes</label>
                </div>
                <div class="group-value">
                    <label class="checkbox">
                        <input type="checkbox" name="auxiliary-classes" value="hover" class="checkbox" checked="checked">
                        Hover
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" name="auxiliary-classes" value="condensed" class="checkbox">
                        Condensed
                    </label>
                </div>
            </div>

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