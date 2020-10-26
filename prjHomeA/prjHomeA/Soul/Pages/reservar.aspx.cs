using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class reservar : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string DatingSim = Request["d"].ToString();
            if (DatingSim == "" || DatingSim == null)
            {
                return;

            }
            string WhoChecked = Request["w"].ToString();
            if (WhoChecked == "" || WhoChecked == null)
            {
                return;

            }

            DataBase Banco = new DataBase();
            Banco.openBar("localhost", "root", "root", "HomeA");
            Banco.setCommand("INSERT INTO ");
            Banco.Refresh();

        }
    }
}