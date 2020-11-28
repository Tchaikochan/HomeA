using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class acceptUser : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banker = new DataBase();

            string Condominio = Request["c"];
            if (Condominio == "" || Condominio == null)
            {
                return;

            }
            string Requester = Request["v"];
            if (Requester == "" || Requester == null)
            {
                return;

            }
            string Email = Request["em"];
            if (Email == "" || Email == null)
            {
                return;

            }
            Banker.openBar("localhost", "root", "root", "HomeA");
            Banker.setCommand("UPDATE Usuario SET cd_tipo_usuario");

        }
    }
}