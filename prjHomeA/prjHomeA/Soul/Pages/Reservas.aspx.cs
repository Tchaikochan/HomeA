using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class Reservas : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banco = new DataBase();
            bool isRunning = bool.Parse(Request["checker"]);
            if (isRunning)
            {
                string Condominio = Request["c"].ToString();
                if (Condominio == "" || Condominio == null)
                {
                    return;

                }

                string Return = "";
                Banco.openBar("localhost", "root", "root", "HomeA");
                Banco.getCommand("SELECT * FROM Area_Lazer");
                while (Banco.Selected.Read())
                {
                    if (Condominio == Banco.Selected["cd_condominio"].ToString())
                    {
                        Return += Banco.Selected["nm_area_lazer"].ToString() + "$" + Banco.Selected["cd_area_lazer"].ToString() + "#";

                    }

                }
                Banco.Refresh();
                Response.Write(Return);    

            }


        }
    }
}