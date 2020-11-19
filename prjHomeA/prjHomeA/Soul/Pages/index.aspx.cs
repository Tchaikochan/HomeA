using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prjHomeA.Soul.Pages
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string isRunning = Request["c"].ToString();
            if (isRunning == "false")
            {
                string Name = Request["n"];
                string Email = Request["e"];
                string Password = Request["p"];


            } else {

            }

        }
    }
}