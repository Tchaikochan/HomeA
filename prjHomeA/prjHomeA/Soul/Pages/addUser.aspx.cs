using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class addUser : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banker = new DataBase();

            string Condominio = Request["c"];
            if (Condominio == "" || Condominio == null)
            {
                return;

            }

            Banker.openBar("localhost", "root", "root", "HomeA");
            Banker.getCommand("SELECT * FROM Usuario");
            string Secco = "";
            while (Banker.Selected.Read())
            {
                if (Banker.Selected["cd_tipo_usuario"].ToString() == "4" ||Banker.Selected["cd_tipo_usuario"].ToString() == "5" || Banker.Selected["cd_tipo_usuario"].ToString() == "6" || Banker.Selected["cd_tipo_usuario"].ToString() == "7")
                {
                                    Secco += Banker.Selected["nm_usuario"].ToString() + "☺" + Banker.Selected["nm_email_usuario"].ToString() + "☺" + Banker.Selected["cd_apartemanto"].ToString() + "♥";
                
                }

            }
            Response.Write(Secco);

        }
    }
}